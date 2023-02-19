package controllers

import (
	"github.com/34seod/angular-go-template/app/models"
	"github.com/34seod/angular-go-template/core"
	"github.com/gin-gonic/gin"
	"net/http"
)

type BoardController struct{}

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
