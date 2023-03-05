package models

import (
	"gorm.io/gorm"
)

type Board struct {
	gorm.Model

	Title   string `json:"title"`
	Content string `json:"content"`
	UserID  int    `json:"userId"`
	User    User
}

func (Board) TableName() string {
	return "board"
}

func (b *Board) FindAll(db *gorm.DB) ([]Board, error) {
	var board []Board
	result := db.Debug().Order("created_at DESC").Find(&board)
	if err := result.Error; err != nil {
		return nil, err
	}
	return board, nil
}

func (b *Board) FindByID(db *gorm.DB) error {
	return db.Debug().Preload("User").Where("id = ?", b.ID).First(b).Error
}

func (b *Board) Create(db *gorm.DB) error {
	return db.Model(&Board{}).Debug().Create(b).Error
}

func (b *Board) Update(db *gorm.DB) error {
	return db.Model(&Board{}).Debug().Where("id = ?", b.ID).Updates(b).Error
}

func (b *Board) Delete(db *gorm.DB) error {
	return db.Debug().Delete(b).Error
}
