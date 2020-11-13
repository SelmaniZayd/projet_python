from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from routes.index import *
from routes.flights import *
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://user:password@db/db'
db = SQLAlchemy(app)
CORS(app)

api.add_resource(hello_world, '/')

api.add_resource(get_airlines, '/airlines')
api.add_resource(get_airlines_count, '/airlines/count')
api.add_resource(get_airlines_by_carrier, '/airlines/<string:carrier>')

api.add_resource(get_planes, '/planes')
api.add_resource(get_planes_count, '/planes/count')
api.add_resource(get_planes_by_tailnum, '/planes/<string:tailnum>')

api.add_resource(get_airports, '/airports')
api.add_resource(get_airports_by_faa, '/airports/<string:faa>')
api.add_resource(get_airports_count, '/airports/count')
api.add_resource(get_time_zones, '/timezones/count')
api.add_resource(get_tzones_not_dst_count, '/timezones/nodst/count')

api.add_resource(get_weather, '/weather')
api.add_resource(get_weather_by_pk, '/weather/<string:origin>/<string:year>/<string:month>/<string:day>/<string:hour>')
api.add_resource(get_weather_by_day, '/weather/<string:origin>/<string:year>/<string:month>/<string:day>')

api.add_resource(get_flights_by_dest, '/flights/to/<string:dest>')

api.add_resource(get_flights, '/flights')
api.add_resource(get_flights_by_id, '/flights/<int:id>')
api.add_resource(get_destinations_count, '/destinations/count')
api.add_resource(get_most_origin_airport, '/most_origin_airport')
api.add_resource(get_most_dest_airport, '/most_dest_airports')
api.add_resource(get_least_dest_airport, '/least_dest_airports')
api.add_resource(get_most_takeoff_planes, '/most_takeoff_planes')
api.add_resource(get_least_takeoff_planes, '/least_takeoff_planes')
api.add_resource(get_flights_by_airline, '/flights_by_airline')
api.add_resource(get_flights_by_origin_by_airline, '/flights_by_origin_by_airline')
api.add_resource(get_flights_to_houston, '/flights_to_houston')
api.add_resource(get_flights_with_late_depart, '/flights/<int:month>/<int:day>/<string:hour>')



if __name__ == '__main__':
    app.run(debug=True)