from models.models import Flight
from flask_restful import Resource
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func, or_, and_
from flask import jsonify

db = SQLAlchemy()

class get_flights(Resource):
    def get(self):
        items = Flight.query.limit(300).all()
        return Flight.json_list(items)

class get_flights_by_id(Resource):
    def get(self, id):
        return Flight.get_delete_put_post(id)

class get_destinations_count(Resource):
    def get(self):
        return db.session.query(Flight.dest.distinct()).count()

class get_most_origin_airport(Resource):
    def get(self):
        result = db.session.query(Flight.origin, func.count(Flight.origin)).group_by(Flight.origin).order_by(func.count(Flight.origin).desc()).limit(1).all()
        transform = [row for row in result]
        transform2 = listrow_to_dict(row2dict(transform[0]))
        return jsonify(transform2)

class get_most_dest_airport(Resource):
    def get(self):
        result = db.session.query(Flight.dest, func.count(Flight.dest)).group_by(Flight.dest).order_by(func.count(Flight.dest).desc()).limit(10).all()
        return jsonify(result_to_list_of_dict(result))

class get_least_dest_airport(Resource):
    def get(self):
        result = db.session.query(Flight.dest, func.count(Flight.dest)).group_by(Flight.dest).order_by(func.count(Flight.dest).asc()).limit(10).all()
        return jsonify(result_to_list_of_dict(result))

class get_most_takeoff_planes(Resource):
    def get(self):
        result = db.session.query(Flight.tailnum, func.count(Flight.tailnum)).filter(Flight.tailnum.isnot(None)).group_by(Flight.tailnum).order_by(func.count(Flight.tailnum).desc()).limit(10).all()
        return jsonify(result_to_list_of_dict(result, "plane"))

class get_least_takeoff_planes(Resource):
    def get(self):
        result = db.session.query(Flight.tailnum, func.count(Flight.tailnum)).filter(Flight.tailnum.isnot(None)).group_by(Flight.tailnum).order_by(func.count(Flight.tailnum).asc()).limit(10).all()
        return jsonify(result_to_list_of_dict(result, "plane"))

#SELECT carrier , count(dest) as nbdest from db.flights group by carrier 
class get_flights_by_airline(Resource):
    def get(self):
        result = db.session.query(Flight.carrier, func.count(Flight.dest)).group_by(Flight.carrier).all()
        return jsonify(result_to_list_of_dict(result, "carrier"))

# SELECT carrier, origin, count(origin) as depart from db.flights group by carrier, origin
class get_flights_by_origin_by_airline(Resource):
    def get(self):
        result = db.session.query(Flight.carrier, Flight.origin, func.count(Flight.origin)).group_by(Flight.carrier, Flight.origin).all()
        return jsonify(result_to_list_of_dict2(result, "carrier"))

#SELECT * from db.flights where dest ='IAH' or dest ='HOU'
class get_flights_to_houston(Resource):
    def get(self):
        resultat = Flight.query.filter(or_(Flight.dest == "IAH", Flight.dest == "HOU")).count()
        return resultat
  
# flight by month day,hour     
# SELECT * FROM db.flights where month = '' AND day = '' AND hour = '';
class get_flights_with_late_depart(Resource):
    def get(self,month,day,hour):
        find_hour = hour+'%'
        resultat = Flight.query.filter(and_(Flight.month == month, Flight.day == day, Flight.dep_time.like(find_hour)))
        return Flight.json_list(resultat)

# flights by origin and destination

# flights by origin

# flights by destination
# SELECT * from db.flights where dest = '';
class get_flights_by_dest(Resource):
    def get(self,dest):
        resultat = Flight.query.filter(Flight.dest == dest)
        return Flight.json_list(resultat)


def row2dict(row):
    d = []
    for column in row:
        d.append(str(column))
    return d

def listrow_to_dict(list, column_name = "airport"):
    d = {}
    d[column_name] = list[0]
    d["count"] = list[1]
    return d

def listrow_to_dict2(list, column_name = "airport"):
    d = {}
    d[column_name] = list[0]
    d["count"] = list[2]
    d["origin"] = list[1]
    return d

def result_to_list_of_dict(result, column_name = "airport"):
    d = []
    list1 = [row for row in result]
    d = [listrow_to_dict(row2dict(el), column_name) for el in list1]
    return d

def result_to_list_of_dict2(result, column_name = "airport"):
    d = []
    list1 = [row for row in result]
    d = [listrow_to_dict2(row2dict(el), column_name) for el in list1]
    return d

