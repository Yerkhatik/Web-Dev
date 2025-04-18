from django.urls import path
from api import views
urlpatterns = [
    path('products/',views.product_list),
    path('products/<int:id>/',views.product_detail),
    path('category/',views.category_list),
    path('category/<int:id>/',views.category_detail),
    path('category/<int:id>/products', views.category_product)
]