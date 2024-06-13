from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Cathegory"
        verbose_name_plural = "Cathegories"
        ordering = ['pk']

    def __str__(self) -> str:
        return self.name


class Dish(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey("Category", related_name='dishes', on_delete=models.CASCADE)
    description = models.TextField()

    class Meta:
        verbose_name = "Dish"
        verbose_name_plural = "Dishes"

    def __str__(self) -> str:
        return self.name
