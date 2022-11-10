from django.db import models


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
    name = models.CharField(max_length=100, null=False, blank=False)
    birth_date = models.DateField(null=False, blank=False)
    mobile = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    phone = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=100, null=False, blank=False)
    role = models.CharField(max_length=1, choices=ROLE, blank=True, null=True)
    status = models.CharField(
        max_length=1, choices=STATUS, blank=True, null=True)
    notes = models.TextField()
    address = models.CharField(max_length=100)
    score = models.FloatField(default=5)
