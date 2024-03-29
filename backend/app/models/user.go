package models

import "gorm.io/gorm"

type User struct {
	gorm.Model

	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

func (User) TableName() string {
	return "user"
}

func (u *User) FindAll(db *gorm.DB) ([]User, error) {
	var users []User
	result := db.Debug().Find(&users)
	if err := result.Error; err != nil {
		return nil, err
	}
	return users, nil
}

func (u *User) FindByID(db *gorm.DB) error {
	return db.Debug().Where("id = ?", u.ID).First(u).Error
}

func (u *User) Create(db *gorm.DB) error {
	return db.Model(&User{}).Debug().Create(u).Error
}

func (u *User) Update(db *gorm.DB) error {
	return db.Model(&User{}).Debug().Where("id = ?", u.ID).Updates(u).Error
}

func (u *User) Delete(db *gorm.DB) error {
	return db.Debug().Delete(u).Error
}

func (u *User) Login(db *gorm.DB) error {
	return db.Debug().Where("username = ?", u.Username).Where("password = ?", u.Password).First(u).Error
}
