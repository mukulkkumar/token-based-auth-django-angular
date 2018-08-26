from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .api import UserLoginAPIView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views as rest_framework_views

# router = DefaultRouter(trailing_slash=False)
# router.register(r'login', UserLoginAPIView,)

urlpatterns = [
    # url(r'^api/', include(router.urls))
    url(r'^api/login$', UserLoginAPIView.as_view(), name='login'),
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
