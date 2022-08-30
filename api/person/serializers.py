from rest_framework import serializers


# Serializer to validate the data for the person model
class PersonSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
