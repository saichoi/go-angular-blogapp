package core

import (
	"fmt"
	"os"
	"sync"
	"time"

	"github.com/34seod/angular-go-template/app/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const max = 5

var (
	DB    *gorm.DB
	dbErr error
	count = 0
	once  = new(sync.Once)
)

var (
	dbAddress = os.Getenv("DB_ADDRESS")
	database  = os.Getenv("DATABASE")
	user      = os.Getenv("USER")
	password  = os.Getenv("PASSWORD")
)

func DBConnect() {
	once.Do(func() {
		DB, dbErr = connect()
		if count > max {
			panic("cannot connect to DB")
		}
		if dbErr != nil && count <= max {
			count = count + 1
			fmt.Printf("try connect ... %v \n", count)
			time.Sleep(time.Second * 5)
			connect()
		}

		DB.AutoMigrate(&models.User{})
	})
}

func connect() (*gorm.DB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local", user, password, dbAddress, database)
	return gorm.Open(mysql.Open(dsn), &gorm.Config{})
}
