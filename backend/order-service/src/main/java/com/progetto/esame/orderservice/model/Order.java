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

	@Column(name = "date") //in Unix Timestamp
	private long date;



	@Column(name = "price") //prezzo totale
	private float price;

	@Column(name = "productsId")
	private long[] productsId;

	public Order(){

	}

	public Order(long userId, long[] productsId, long date, float price) {
		this.userId = userId;
		this.productsId = productsId;
		this.date = date;
		this.price = price;
	}

	public long[] getProductsId() {
		return this.productsId;
	}

	public long getDate() {
		return this.date;
	}

	public void setDate(long date) {
		this.date = date;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public void setProductsId(long[] productsId) {
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

}
