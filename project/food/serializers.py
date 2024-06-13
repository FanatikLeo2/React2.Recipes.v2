from rest_framework import serializers

from .models import Dish, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class DishSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = '__all__'