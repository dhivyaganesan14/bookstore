
from flask import Flask, render_template, request, flash
from flask_mysqldb import MySQL
import MySQLdb.cursors
app = Flask(__name__)
app.config['MYSQL_USER'] = 'gutsy'
app.config['MYSQL_PASSWORD'] = 'Diya1234*'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_DB'] = 'book'
app.secret_key = 'many random bytes'
mysql = MySQL(app)
