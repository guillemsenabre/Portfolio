from flask import Blueprint, render_template, request, jsonify
from config import PATH_RF_MODEL
from .model_utils import Model

# define main blueprint
main_bp = Blueprint('main', __name__)

'''
@app.errorhandler(405)
def method_not_allowed(e):
    # if a request has the wrong method to our API
    if request.path.startswith('/api/'):
        # we return a json saying so
        return jsonify(message="Method Not Allowed"), 405
    else:
        # otherwise we return a generic site-wide 405 page
        return render_template("405.html"), 405
'''

@main_bp.route("/")
def index():
  return render_template('index.html')

@main_bp.route("/getTitanicView")
def get_titanic():
  return render_template('titanic.html')

@main_bp.route("/getPredictions", methods=['POST'])
def process_form():
  if request.method == 'POST':
    try:
      # Access the JSON data from the form
      data = request.get_json()

      # Extracting required features
      sex = data.get('sex')
      cabin = data.get('cabin')
      fare = data.get('fare')

      # formatting the data for the model
      input_data = [sex, fare, cabin] 

      model = Model(PATH_RF_MODEL)
        
      # The model was trained using the following order of features:
      # [passengerId, pclass, sex, fare, cabin] --> passengerId will be removed (for now the Model cass is dealing with it)
      # To get predictions the model needs to be fed with the
      #SAME features in the same order.
      result_text, prob_yes = model.get_prediction(input_data)

      # jsonify response
      response = {
        'prob_yes': prob_yes,
        'result_text': result_text
      }

      return jsonify(response), 200
    
    except Exception as e:
      # Handle unexpected errors
      print(f"Error processing prediction request: {e}")
      return jsonify({'error': 'An error occurred. Please try again later.'}), 500
  
  else:
    return jsonify({'error': 'method not POST'})