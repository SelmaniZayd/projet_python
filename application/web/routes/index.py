from models.models import Airline, Plane, Airport, Weather
from flask_restful import Resource
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify

db = SQLAlchemy()

class hello_world(Resource):
    def get(self):
        return 'Hello world 3', 200
# *********** AIRLINES *************
class get_airlines(Resource):
    def get(self):
        return Airline.get_delete_put_post()

class get_airlines_by_carrier(Resource):
    def get(self, carrier):
        return Airline.get_delete_put_post(carrier)

class get_airlines_count(Resource):
    def get(self):
        return Airline.query.count()

# *********** PLANES *************
class get_planes(Resource):
    def get(self):
        items = Plane.query.limit(300).all()
        return Plane.json_list(items)

class get_planes_by_tailnum(Resource):
    def get(self, tailnum):
        return Plane.get_delete_put_post(tailnum)

class get_planes_count(Resource):
    def get(self):
        return Plane.query.count()

# *********** AIRPORTs *************
class get_airports(Resource):
    def get(self):
        items = Airport.query.limit(300).all()
        return Airport.json_list(items)

class get_airports_by_faa(Resource):
    def get(self, faa):
        return Airport.get_delete_put_post(faa)

class get_airports_count(Resource):
    def get(self):
        return Airport.query.count()

class get_time_zones(Resource):
    def get(self):
        return db.session.query(Airport.tz.distinct()).count()

class get_tzones_not_dst_count(Resource):
    def get(self):
        count = db.session.query(Airport.tzone.distinct()).filter(Airport.dst == "N").count()
        return count
        
# *********** WEATHER *************
class get_weather(Resource):
    def get(self):
        items = Weather.query.limit(300).all()
        return Weather.json_list(items)

class get_weather_by_pk(Resource):
    def get(self, origin, year, month, day, hour):
        return Weather.json_filter_by(origin=origin, year=year, month=month, day=day, hour=hour)

class get_weather_by_day(Resource):
    def get(self, origin, year, month, day):
        return Weather.json_filter_by(origin=origin, year=year, month=month, day=day)

# SELECT origin, month, avg(temp) FROM db.weather group by origin, year, month;
class get_weather_avg_by_origin(Resource):
    def get(self, origin):
        resultat  = db.session.query(Weather.origin,Weather.month, func.avg(Weather.temp)).filter(Weather.origin == origin).group_by(Weather.origin,Weather.year,Weather.month)
        return 'blabla'
        # return Weather.json_filter_by(origin=origin, year=year, month=month, day=day)