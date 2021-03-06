package com.spe.cms.domain;

import com.spe.cms.domain.general.IEntity;

/**
 * Created by marc on 20/11/2017.
 */
public class Client implements IEntity<String> {

//    FIELDS
    private String id; //primary key in db
    private String password;
    private String orgName;
    private String orgAddress;
    private String orgPhone;
    private String persName;
    private String persPhone;
    private String persEmail;

//    CONSTRUCTORS
    public Client(String id, String password, String orgName, String orgAddress, String orgPhone, String persName, String persPhone, String persEmail) {
        this.id = id;
        this.password = password;
        this.orgName = orgName;
        this.orgAddress = orgAddress;
        this.orgPhone = orgPhone;
        this.persName = persName;
        this.persPhone = persPhone;
        this.persEmail = persEmail;
    }

//    GETTERS AND SETTERS
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    public String getOrgAddress() {
        return orgAddress;
    }

    public void setOrgAddress(String orgAddress) {
        this.orgAddress = orgAddress;
    }

    public String getOrgPhone() {
        return orgPhone;
    }

    public void setOrgPhone(String orgPhone) {
        this.orgPhone = orgPhone;
    }

    public String getPersName() {
        return persName;
    }

    public void setPersName(String persName) {
        this.persName = persName;
    }

    public String getPersPhone() {
        return persPhone;
    }

    public void setPersPhone(String persPhone) {
        this.persPhone = persPhone;
    }

    public String getPersEmail() {
        return persEmail;
    }

    public void setPersEmail(String persEmail) {
        this.persEmail = persEmail;
    }
}
