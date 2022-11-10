from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=100)
    birth_date = models.DateField()
    mobile = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    status
