from django.db import models
from django.core.validators import MinLengthValidator


# Class person
class Person(models.Model):
    STATUS = (
        ('P', 'Pending'),
        ('A', 'Active'),
        ('I', 'Inactive'),
    )
    ROLE = (
        ('A', 'Admin'),
        ('C', 'Customer'),
        ('P', 'Provider'),
        ('E', 'Employee')
    )
    name = models.CharField(
        max_length=100, validators=[MinLengthValidator(5)], null=False, blank=False
    )
    birth_date = models.DateField(null=False, blank=False)
    mobile = models.CharField(
        max_length=100, unique=True, blank=False, null=False
    )
    email = models.EmailField(
        max_length=254, unique=True, validators=[MinLengthValidator(5)], blank=False, null=False
    )
    phone = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(
        max_length=100, validators=[MinLengthValidator(8)], blank=False, null=False
    )
    role = models.CharField(max_length=1, choices=ROLE)
    status = models.CharField(max_length=1, choices=STATUS)
    notes = models.TextField(blank=True, null=True)
    address = models.CharField(max_length=100, blank=False, null=False)
    score = models.FloatField(default=5)
