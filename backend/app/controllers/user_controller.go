package controllers

import (
	"net/http"

	"github.com/34seod/angular-go-template/app/models"
	"github.com/34seod/angular-go-template/core"
	"github.com/gin-gonic/gin"
)

type UserController struct{}

func (u UserController) Index(c *gin.Context) {
	user := models.User{}

	if result, err := user.FindAll(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": result})
	}
}

func (u UserController) Show(c *gin.Context) {
	user := models.User{}
	user.ID = core.StringToUint(c.Param("id"))

	if err := user.FindByID(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": user})
	}
}

func (u UserController) Create(c *gin.Context) {
	user := models.User{}
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := user.Create(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": user})
	}
}

func (u UserController) Update(c *gin.Context) {
	user := models.User{}
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user.ID = core.StringToUint(c.Param("id"))

	if err := user.Update(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": user})
	}
}

func (u UserController) Delete(c *gin.Context) {
	user := models.User{}
	user.ID = core.StringToUint(c.Param("id"))

	if err := user.Delete(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusNoContent, gin.H{})
	}
}
