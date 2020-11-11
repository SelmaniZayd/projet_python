from models.models import Airline, Plane, Airport, Weather
from flask_restful import Resource

class get_airlines(Resource):
    def get(self):
        return Airline.get_delete_put_post()

class get_airlines_by_carrier(Resource):
    def get(self, carrier):
        return Airline.get_delete_put_post(carrier)

class get_planes(Resource):
    def get(self):
        items = Plane.query.limit(300).all()
        return Plane.json_list(items)

class get_planes_by_tailnum(Resource):
    def get(self, tailnum):
        return Plane.get_delete_put_post(tailnum)

class get_airports(Resource):
    def get(self):
        items = Airport.query.limit(300).all()
        return Airport.json_list(items)

class get_airports_by_faa(Resource):
    def get(self, faa):
        return Airport.get_delete_put_post(faa)

class get_weather(Resource):
    def get(self):
        items = Weather.query.limit(300).all()
        return Weather.json_list(items)

class get_weather_by_pk(Resource):
    def get(self, origin, year, month, day, hour):
        return Weather.json_filter_by(origin=origin, year=year, month=month, day=day, hour=hour)