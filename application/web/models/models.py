from flask_serialize import FlaskSerializeMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Airline(db.Model, FlaskSerializeMixin):
    __tablename__ = 'airlines'
    carrier = db.Column(db.String(3), primary_key=True)
    name = db.Column(db.String(50))
    
class Plane(db.Model, FlaskSerializeMixin):
    __tablename__ = 'planes'
    tailnum = db.Column(db.String(10), primary_key=True)
    year = db.Column(db.Integer)
    type = db.Column(db.String(50))
    manufacturer = db.Column(db.String(50))
    model = db.Column(db.String(20))
    engines = db.Column(db.Integer)
    seats = db.Column(db.Integer)
    speed = db.Column(db.Integer)
    engines = db.Column(db.String(50))

class Airport(db.Model, FlaskSerializeMixin):
    __tablename__ = 'airports'
    faa = db.Column(db.String(5), primary_key=True)
    name = db.Column(db.String(100))
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)
    alt = db.Column(db.Integer)
    tz = db.Column(db.Integer)
    dst = db.Column(db.String(3))
    tzone = db.Column(db.String(50))

class Weather(db.Model, FlaskSerializeMixin):
    __tablename__ = 'weather'
    origin = db.Column(db.String(5), primary_key=True)
    year = db.Column(db.Integer, primary_key=True)
    month = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.Integer, primary_key=True)
    hour = db.Column(db.Integer, primary_key=True)
    temp = db.Column(db.Float)
    dewp = db.Column(db.Float)
    humid = db.Column(db.Float)
    wind_dir = db.Column(db.Integer)
    wind_speed = db.Column(db.Float)
    wind_gust = db.Column(db.Float)
    precip = db.Column(db.Float)
    pressure = db.Column(db.Float)
    visib = db.Column(db.Float)
    time_hour = db.Column(db.DateTime)

class Flight(db.Model, FlaskSerializeMixin):
    __tablename__ = 'flights'
    flight_id = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.Integer)
    month = db.Column(db.Integer)
    day = db.Column(db.Integer)
    dep_time = db.Column(db.Integer)
    sched_dep_time = db.Column(db.Integer)
    dep_delay = db.Column(db.Integer)
    arr_time = db.Column(db.Integer)
    sched_arr_time = db.Column(db.Integer)
    arr_delay = db.Column(db.Integer)
    carrier = db.Column(db.String(3), db.ForeignKey('airlines.carrier'))
    flight = db.Column(db.Integer)
    tailnum = db.Column(db.String(10), db.ForeignKey('planes.tailnum'))
    origin = db.Column(db.String(5), db.ForeignKey('airports.faa'))
    dest = db.Column(db.String(5), db.ForeignKey('airports.faa'))
    air_time = db.Column(db.Integer)
    distance = db.Column(db.Integer)
    hour = db.Column(db.Integer)
    minute = db.Column(db.Integer)
    time_hour = db.Column(db.DateTime)

    
    ##db.ForeignKeyConstraint(['flights.origin', 'flights.year', 'flights.month', 'flights.day', 'flights.hour'], ['weather.origin', 'weather.year', 'weather.month', 'weather.day', 'weather.hour'])
    
    #airline = db.relationship("Airline", foreign_keys=[carrier])
    #airport_origin = db.relationship("Airport", foreign_keys=[origin])
    #airport_dest = db.relationship("Airport", foreign_keys=[dest])

    #relationship_fields= ['airline', 'airport_origin', 'airport_dest']