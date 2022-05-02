export const FormInput = ({submit, handleChange, isMarried }) => {
    return (
        <div>
            <form onSubmit={submit} action="">
                <input onChange={handleChange} type="text" name="name" id="" />
                <input onChange={handleChange} type="text" name="age" id="" />
                <input onChange={handleChange} type="text" name="address" id="" />
                <select name="department" id="">
                    <option value="">Select Department</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Developer">Developer</option>
                    <option value="Sales">Sales</option>
                    <option value="DevOps">DevOps</option>
                </select>
                <input onChange={handleChange} type="number" name="salary" id="" />
                <div>
                    <label htmlFor="">Marital Status</label>
                <input onChange={handleChange} type="checkbox" checked={isMarried} name="isMarried" id="" />
                </div>
                <input onChange={handleChange} type="submit" name="" value={"submit"} id="" />
            </form>
        </div>
    )
}