package com.progetto.esame.orderservice.model;


import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "userId")
	private long userId;

	@Column(name = "productsId")
	private long productsId;

	public Order(){

	}

	public Order(long userId, long productsId) {
		this.userId = userId;
		this.productsId = productsId;
	}

	public long getId() {
		return this.id;
	}

	public long getUserId() {
		return this.userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getProductsId() {
		return this.productsId;
	}

	public void setProductsId(long productsId) {
		this.productsId = productsId;
	}
}
