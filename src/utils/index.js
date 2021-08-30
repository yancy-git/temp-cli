/**
 * 睡眠等待效果
 * @param {Int} delay 睡眠时间
 * @returns 
 */
 export function sleep(delay) {
	return new Promise(resolve => setTimeout(resolve, delay))
}


