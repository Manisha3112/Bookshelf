var ValiSchema = {
    type: 'object',
    required: [ 'Student_Name', 'Student_Department'],
    properties: {
        Student_Name: {
            type: 'string',
            minLength: 3,
            maxLength: 36
            
        },
        Student_Department: {
            type: 'string',
            minLength: 3,
            maxLength: 36
        },
        
    }
}
module.exports=ValiSchema;