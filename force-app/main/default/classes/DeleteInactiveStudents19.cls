public class DeleteInactiveStudents19 Implements Database.Batchable<SObject>{
    public Database.QueryLocator start(Database.BatchableContext bc){
        string query = 'select Id from Student__c where Status__c = \'InActive\' and Inactivity_Approved__c = true';
        return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext bc , List<Student__c> Stu){
        delete Stu;
    }
    public void finish(Database.BatchableContext bc){
    }
}