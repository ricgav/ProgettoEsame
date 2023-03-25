package com.progetto.esame.productservice.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description ;


	@Column(name = "size")
	private String size;

	@Column(name = "price")
	private float price;

	@Column(name = "type")
	private String type;

	@Column(name = "image")
	private String image;

	@Column(name = "sellerId")
	private long sellerId;

	public Product(){
	}

	public Product(String name, String description, float price, String type, String image, long sellerId, String size) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.type = type;
		this.image = image;
		this.sellerId = sellerId;
		this.size = size;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}
	public long getSellerId() {
		return this.sellerId;
	}

	public void setSellerId(long sellerId) {
		this.sellerId = sellerId;
	}
	public long getId() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return this.price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
