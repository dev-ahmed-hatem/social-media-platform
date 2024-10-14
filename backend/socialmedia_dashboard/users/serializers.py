from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='users-detail', lookup_field='pk')
    password = serializers.CharField(write_only=False, required=False)
    password2 = serializers.CharField(write_only=False, required=False)

    class Meta:
        model = User
        fields = ["url", "first_name", "last_name", "email", "phone", "is_active",
                  "picture", "is_superuser", "password", "password2"]

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError("Passwords must match")
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        if password is None:
            raise serializers.ValidationError({"password": ["Password is required"]})
        try:
            validated_data.pop('password2')
        except KeyError:
            raise serializers.ValidationError([{"password2": ["Enter password confirmation"]}])
        user = User.objects.create(**validated_data)
        user.is_active = True
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        super(UserSerializer, self).update(instance, validated_data)
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password)
            instance.save()
        return instance
