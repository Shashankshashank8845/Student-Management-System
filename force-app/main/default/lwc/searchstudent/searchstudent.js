import { LightningElement, track } from 'lwc';
import searchStudents from '@salesforce/apex/StudentController.getStudentDetails';
const columns = [
    { label: 'Student ID', fieldName: 'Student_Id__c', type: 'text' },
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Email', fieldName: 'Email__c', type: 'email' },
    { label: 'Inactivity Approved', fieldName: 'Inactivity_Approved__c', type: 'boolean' }
];
export default class searchstudent extends LightningElement {
    @track searchKey = '';
    @track searchedStudents;
    columns = columns;
    handleSearchChange(event) {
        this.searchKey = event.target.value;
    }
    searchStudents() {
        searchStudents({ searchTerm: this.searchKey })
            .then(result => {
                this.searchedStudents = result;
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching student details', error);
            });
    }
    clearSearch() {
        this.searchKey = '';
        this.searchedStudents = null;
    }
}