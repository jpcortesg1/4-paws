from random import choices
from person.models import Person
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


# Serializer to validate the data for the person model
class PersonSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, min_length=5, required=True)
    birth_date = serializers.DateField(required=True)
    mobile = serializers.CharField(max_length=100, required=True, validators=[
                                   UniqueValidator(queryset=Person.objects.all())])
    email = serializers.EmailField(max_length=254, required=True, validators=[
                                   UniqueValidator(queryset=Person.objects.all())])
    phone = serializers.CharField(max_length=100, required=False)
    password = serializers.CharField(
        max_length=100, min_length=8, required=True)
    role = serializers.ChoiceField(choices=Person.ROLE, required=True)
    notes = serializers.CharField(required=False)
    address = serializers.CharField(max_length=100, required=True)


class PersonUpdateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, min_length=5, required=False)
    birth_date = serializers.DateField(required=False)
    mobile = serializers.CharField(max_length=100, required=False, validators=[
                                   UniqueValidator(queryset=Person.objects.all())])
    email = serializers.EmailField(max_length=254, required=False, validators=[
                                   UniqueValidator(queryset=Person.objects.all())])
    phone = serializers.CharField(max_length=100, required=False)
    password = serializers.CharField(
        max_length=100, min_length=8, required=False)
    role = serializers.ChoiceField(choices=Person.ROLE, required=False)
    notes = serializers.CharField(required=False)
    address = serializers.CharField(max_length=100, required=False)
