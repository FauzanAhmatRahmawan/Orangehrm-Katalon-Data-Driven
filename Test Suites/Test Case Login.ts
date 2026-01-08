<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Test Case Login</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>37056e5b-4694-4ddf-904b-30c03b78b858</testSuiteGuid>
   <testCaseLink>
      <guid>003dc18c-a1aa-4102-9ab7-ced45a0291a1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Positive Case</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>5fabbe7b-d39b-4be3-9d30-a3fc965d2767</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Forgot Password</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>0c7cee52-32b7-4167-a066-6e33f17c6b7d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>424c7080-10ed-4692-85fd-206ddf833f86</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Login Negative Invalid Data</testCaseId>
      <testDataLink>
         <combinationType>MANY</combinationType>
         <id>55ed1891-33e4-41f1-a0ab-67c40b5ae5bf</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Negative Login</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>55ed1891-33e4-41f1-a0ab-67c40b5ae5bf</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>﻿username</value>
         <variableId>424c7080-10ed-4692-85fd-206ddf833f86</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>55ed1891-33e4-41f1-a0ab-67c40b5ae5bf</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>a13c4651-475d-4aff-b47d-dce0c4206257</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
