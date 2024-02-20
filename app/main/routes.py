from flask import Blueprint, render_template, request

# define main blueprint
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
  return render_template('index.html', result=None)

@main_bp.route('/getTitanicView')
def get_titanic():
  return render_template('titanic.html', result=None)