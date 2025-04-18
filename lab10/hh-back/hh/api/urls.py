from django.urls import path, re_path
from api import views,fbv,cbv

urlpatterns = [
    # path('home/', views.home),

    path('companies/', views.companies_list),
    path('companies/<int:company_id>/', views.company_details),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),

    path('vacancies/', cbv.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', cbv.VacancyByIdAPIView.as_view()),
    path('vacancies/top_ten/', views.vacancies_top_ten)

]

# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary
