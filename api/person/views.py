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

    def get(self, _, id=0):
        if(id > 0):
            persons = list(Person.objects.filter(id=id).values())
        else:
            persons = list(Person.objects.values())

        data = {'message': 'Success', 'status': 200}
        if(len(persons) > 0):
            data['persons'] = persons
        else:
            data['message'] = 'Persons not found...'
            data['status'] = 500

        return JsonResponse(data)

    def post(self, request):
        data = {'message': 'Success', 'status': 200}
        req = validators.convert_body_to_dict(request, data)
        newPassword = make_password(req['password'])
        validation = validators.validate_api(req)

        if not validation['success']:
            data['message'] = 'Bad Request Body'
            data['status'] = 400
            data['errors'] = validation['errors']
            return JsonResponse(data)

        req['password'] = newPassword
        Person.objects.create(**req)
        return JsonResponse(req)

    def put(self, request, id):
        data = {'message': 'Success', 'status': 200}
        req = validators.convert_body_to_dict(request, data)
        validation = validators.validate_api(req, 'put')

        if("password" in req):
            newPassword = make_password(req['password'])
            req['password'] = newPassword

        if not validation['success']:
            data['message'] = 'Bad Request Body'
            data['status'] = 400
            data['errors'] = validation['errors']
            return JsonResponse(data)

        Person.objects.filter(id=id).update(**req)
        return JsonResponse({'message': 'Success', 'status': 201})

    def delete(self, _, id):
        Person.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Success', 'status': 201})
