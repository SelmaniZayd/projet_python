from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from routes.index import *
from routes.flights import *

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://user:password@localhost:3306/db'
db = SQLAlchemy(app)

api.add_resource(get_airlines, '/airlines')
api.add_resource(get_airlines_by_carrier, '/airlines/<string:carrier>')

api.add_resource(get_planes, '/planes')
api.add_resource(get_planes_by_tailnum, '/planes/<string:tailnum>')

api.add_resource(get_airports, '/airports')
api.add_resource(get_airports_by_faa, '/airports/<string:faa>')

api.add_resource(get_weather, '/weather')
api.add_resource(get_weather_by_pk, '/weather/<string:origin>/<string:year>/<string:month>/<string:day>/<string:hour>')

api.add_resource(get_flights, '/flights')
api.add_resource(get_flights_by_id, '/flights/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)