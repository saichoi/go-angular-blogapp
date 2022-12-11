package models

import "gorm.io/gorm"

type Board struct {
	gorm.Model

	Title   string `json:"title"`
	Content string `json:"content"`
	UserID  int    `json:"user_id"`
}

func (Board) TableName() string {
	return "board"
}

func (u *Board) FindAll(db *gorm.DB) ([]Board, error) {
	var users []Board
	result := db.Debug().Find(&users)
	if err := result.Error; err != nil {
		return nil, err
	}
	return users, nil
}

func (u *Board) FindByID(db *gorm.DB) error {
	return db.Debug().Joins("User").Where("id = ?", u.ID).First(u).Error
}

func (u *Board) Create(db *gorm.DB) error {
	return db.Model(&User{}).Debug().Create(u).Error
}

func (u *Board) Update(db *gorm.DB) error {
	return db.Model(&User{}).Debug().Where("id = ?", u.ID).Updates(u).Error
}

func (u *Board) Delete(db *gorm.DB) error {
	return db.Debug().Delete(u).Error
}
