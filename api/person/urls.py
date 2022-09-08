from django.urls import path
from .views import PersonView

urlpatterns = [
    path('persons/', PersonView.as_view(), name='persons_list'),
    path('persons/<int:id>', PersonView.as_view(), name='persons_process'),
]
