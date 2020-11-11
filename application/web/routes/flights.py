from models.models import Flight
from flask_restful import Resource

class get_flights(Resource):
    def get(self):
        items = Flight.query.limit(300).all()
        return Flight.json_list(items)

class get_flights_by_id(Resource):
    def get(self, id):
        return Flight.get_delete_put_post(id)