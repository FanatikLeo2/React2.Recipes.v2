from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions, viewsets

from .models import Category, Dish
from .serializers import CategorySerializer, DishSerilizer

class DishViewSet(viewsets.ModelViewSet):
    serializer_class = DishSerilizer
    queryset = Dish.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


schema_view = get_schema_view(
    openapi.Info(
        title="API",
        default_version='v2',
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)