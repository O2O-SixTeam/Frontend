<template>
	<div class="carousel">
		<slot></slot>
		<button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
		<button class="carousel__nav carousel__next" @click.prevent="next"></button>
		<div class="carousel__pagination">
			<button v-for="n in slidesCount" @click="goto(n-1)" :class="{active: n - 1 == index}"></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				slides: [],
				direction: 'null'
			}
		},
		mounted() {
			this.slides = this.$children
			this.slides.forEach((slide, i) => {
				slide.index = i
			})
		},
		computed: {
			slidesCount() { return this.slides.length }
		},
		methods: {
			next() {
				this.index ++
				this.direction = 'right'
				if(this.index >= this.slidesCount) {
					this.index = 0
				}
			},
			prev() {
				this.index --
				this.direction = 'left'
				if(this.index < 0) {
					this.index = this.slidesCount - 1
				}
			},
			goto(index) {
				this.direction = index > this.index ? 'right' : 'left'
				this.index = index
			}
		}
	}
</script>

<style>
	.carousel {
		position: relative;
	}
	.carousel__nav {
		position: absolute;
		margin-top: -31px;
		top: 50%;
		left: 10px;
		width: 63px;
		height: 63px;
	}
	.carousel__prev,
	.carousel__next {
    position: absolute;
    top: 55%;
    background-color: #2c3e50;
    opacity: 0.7;
    border-radius: 50%;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    line-height: 3.2rem;
    transform: translate(0, -50%);
    text-align: center;
    z-index: 100;
    transition: opacity 0.3s ease;
		outline: none;
		border: none;
}
.carousel__prev {
    left: -80px;
    padding-right: 10px;
}
.carousel__prev::before {
    content: '\f053';
		vertical-align: top;
    font-family: "FontAwesome";
}
.carousel__next {
    right: -80px;
		left: auto;
    padding-left: 10px;
}
.carousel__next::before {
    content: '\f054';
		vertical-align: top;
    font-family: "FontAwesome";
}
.carousel__prev:hover,
.carousel__next:hover {
    opacity: 1;
    background: #e74c3c;
}

.carousel__pagination {
	position: absolute;
	bottom: 10px;
	left: 0;
	right: 0;
	text-align: center;
}
.carousel__pagination button {
	display: inline-block;
	width: 20px;
	height: 20px;
	background-color: #fff;
	opacity: 0.8;
	border: none;
	border-radius: 50%;
	margin: 10px 2px 0 2px;
	outline: none;
}
.carousel__pagination button.active {
	background-color: #e74c3c;
}

@media screen and (max-width: 640px) {
	.carousel__prev {
		left: 2%;
	}
	.carousel__next {
		right: 2%;
	}
}
</style>