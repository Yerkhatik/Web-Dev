from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product,Category

# Create your views here.
products= Product.objects.all()
categories = Category.objects.all()

def product_list(request):
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json,safe=False)

def product_detail(request,id):
    product = Product.objects.get(pk=id)
    return JsonResponse(product.to_json())

def category_list(request):
    category_json = [c.to_json() for c in categories]
    return JsonResponse(category_json,safe=False)

def category_detail(request,id):
    category = Category.objects.get(pk = id)
    return JsonResponse(category.to_json())

def category_product(request,id):
    products = [product.to_json() for product in Product.objects.filter(category_id = id)]
    category_products = {
        'products': products
    }
    return JsonResponse(category_products)

   


    
