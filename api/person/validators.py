import json
from . import serializers


# Validate the request data
def validate_api(request):
    # Prepare the response data
    res = {}
    res['success'] = True
    res['errors'] = None
    res['details'] = None

    # Validate the request data
    validation = serializers.PersonSerializer(data=request)

    # Positive response
    if validation.is_valid():
        res['success'] = True
        return res

    # Negative response
    res["success"] = False
    res["details"] = "Bad Request Body"
    res["errors"] = validation.errors
    return res


# Convert body of request to dictionary
def convert_body_to_dict(request, response):
    try:
        dict_body = json.loads(request.body.decode("utf-8"))
    except Exception as e:
        response["details"] = "Invalid request body"
    return dict_body
