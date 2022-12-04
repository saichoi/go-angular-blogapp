package core

import "strconv"

func StringToUint(n string) uint {
	if num, err := strconv.ParseUint(n, 10, 64); err == nil {
		return uint(num)
	} else {
		return 0
	}
}
