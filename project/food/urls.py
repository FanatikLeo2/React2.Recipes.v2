from rest_framework import routers
from django.urls import path, include

from .views import DishViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('dishes', DishViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]