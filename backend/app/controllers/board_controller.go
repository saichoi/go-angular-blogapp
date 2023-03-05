package controllers

import (
	"github.com/34seod/angular-go-template/app/models"
	"github.com/34seod/angular-go-template/core"
	"github.com/gin-gonic/gin"
	"net/http"
)

type BoardController struct{}

func (u BoardController) Index(c *gin.Context) {
	board := models.Board{}

	if result, err := board.FindAll(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": result})
	}
}

func (b BoardController) Show(c *gin.Context) {
	board := models.Board{}
	board.ID = core.StringToUint(c.Param("id"))
	if err := board.FindByID(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"title": board.Title, "content": board.Content, "username": board.User.Username})
	}
}

func (b BoardController) Create(c *gin.Context) {
	board := models.Board{}
	if err := c.ShouldBindJSON(&board); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := board.Create(core.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": board})
	}
}
