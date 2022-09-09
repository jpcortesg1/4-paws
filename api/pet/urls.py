from django.urls import path
from .views import PetView

urlpatterns = [
    path('pets/', PetView.as_view(), name='pets_list'),
    path('pets/<int:id>', PetView.as_view(), name='pets_process'),
]
