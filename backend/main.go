package main

import (
	"github.com/34seod/angular-go-template/app/controllers"
	"github.com/34seod/angular-go-template/core"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	core.DBConnect()
	r := gin.Default()

	r.Use(cors.Default())

	userController := controllers.UserController{}
	user := r.Group("users")
	user.GET("", userController.Index)
	user.GET("/:id", userController.Show)
	user.POST("", userController.Create)
	user.PUT("/:id", userController.Update)
	user.DELETE("/:id", userController.Delete)
	user.POST("/login", userController.Login)

	r.Run()
}
