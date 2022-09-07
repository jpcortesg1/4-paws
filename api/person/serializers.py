from person.models import Person
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


# Serializer to validate the data for the person model
class PersonSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, min_length=5, required=True)
    birth_date = serializers.DateField(required=True)
    mobile = serializers.CharField(max_length=100, validators=[
                                   UniqueValidator(queryset=Person.objects.all())])
    email = serializers.EmailField(max_length=254, validators=[
                                   UniqueValidator(queryset=Person.objects.all())])
    phone = serializers.CharField(max_length=100, required=False)
    password = serializers.CharField(
        max_length=100, min_length=8, required=True)
    notes = serializers.CharField(required=False)
    address = serializers.CharField(max_length=100, required=True)
