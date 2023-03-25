package com.progetto.esame.userservice.model;


import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "mail")
	private String mail;

	@Column(name = "name")
	private String name;

	@Column(name = "surname")
	private String surname;

	@Column(name = "password")
	private String password;

	@Column(name = "address")
	private String address;

	@Column(name = "image")
	private String image;

	@Column(name = "isSeller")
	private boolean isSeller;

	public User(){

	}
	public User(String mail, String name, String surname, String password, String address, boolean isSeller, String image) {
		this.mail = mail;
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.address = address;
		this.isSeller = isSeller;
		this.image = image;
	}

	public long getId() {
		return this.id;
	}

	public String getMail() {
		return this.mail;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return this.surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public boolean isSeller() {
		return isSeller;
	}

	public void setSeller(boolean seller) {
		this.isSeller = seller;
	}

	//	@Override
//	public String toString() {
//		return "Customer [id=" + id + ", name=" + name + ", age=" + age + ", active=" + active + "]";
//	}
}
