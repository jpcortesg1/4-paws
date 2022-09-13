from django.db import models
from person.models import Person

# Create your models here.


class Pet(models.Model):
    STATUS = (
        ('P', 'Pending'),
        ('A', 'Active'),
        ('I', 'Inactive'),
    )
    id_person = models.ForeignKey(Person, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=False, null=False)
    birth_date = models.DateField(null=False, blank=False)
    specie = models.CharField(max_length=100, blank=True, null=True)
    breed = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=100, blank=False, null=False)
    color = models.CharField(max_length=100, blank=True, null=True)
    size = models.CharField(max_length=100, blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    size = models.FloatField(blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS)
    notes = models.TextField(blank=True, null=True)
    score = models.FloatField(default=5)
