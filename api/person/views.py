import json
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from .models import Person
from . import validators


# This is class to management the person model (Controller)
class PersonView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, _):
        data = {'message': 'Success', 'status': 200}
        persons = list(Person.objects.values())
        if(len(persons) > 0):
            data['persons'] = persons
        else:
            data['message'] = 'Persons not found...'
            data['status'] = 500

        return JsonResponse(data)

    def post(self, request):
        data = {'message': 'Success', 'status': 200}
        req = validators.convert_body_to_dict(request, data)
        validation = validators.validate_api(req)

        if not validation['success']:
            data['message'] = 'Bad Request Body'
            data['status'] = 400
            data['errors'] = validation['errors']
            return JsonResponse(data)

        body = json.loads(request.body)
        newPassword = make_password(body['password'])
        Person.objects.create(
            name=body['name'],
            birth_date=body['birth_date'],
            mobile=body['mobile'],
            email=body['email'],
            phone=body['phone'],
            password=newPassword,
            role=body['role'],
            status=body['status'],
            notes=body['notes'],
            address=body['address'],
        )
        return JsonResponse(data)
