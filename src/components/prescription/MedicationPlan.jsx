import React, { useState } from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import InputField from "../../common/ui/InputField";
import FormSelect from "../../common/ui/FormSelect";
import { toast } from "react-toastify";

const initialForm = {
  medicine: "",
  dosage: "",
  frequency: {
    MOR: false,
    AFT: false,
    NIT: false,
  },
  meal: "After Food",
  duration: "",
  durationType: "Days",
  quantity: "",
};

const MedicationPlan = () => {
  const [formData, setFormData] = useState(initialForm);
  const [medicines, setMedicines] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFrequencyChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      frequency: {
        ...prev.frequency,
        [field]: !prev.frequency[field],
      },
    }));
  };

  const handleAddMedicine = () => {
    const medicineName = formData.medicine.trim();
    const dosage = formData.dosage.trim();
    const duration = formData.duration.trim();
    const quantity = formData.quantity.trim();

    // ✅ Medicine Name Required
    if (!medicineName) {
      toast.error("Please enter medicine name");
      return;
    }

    // ✅ Medicine Name Validation
    if (medicineName.length < 3) {
      toast.error("Medicine name must be at least 3 characters");
      return;
    }

    // ✅ Prevent only numbers
    if (!/^[A-Za-z][A-Za-z\s.-]*$/.test(medicineName)) {
      toast.error(
        "Medicine name must contain letters only and cannot start with numbers",
      );
      return;
    }

    // ✅ Dosage Optional But If Written Then Validate
    if (
      dosage &&
      !/^[0-9]+(\.[0-9]+)?\s?(mg|g|ml|mcg|tablet|tablets|capsule|capsules|drops)$/i.test(
        dosage,
      )
    ) {
      toast.error("Invalid dosage format. Example: 500mg, 5ml, 1tablet");
      return;
    }

    // ✅ Frequency Required
    const isFrequencySelected =
      formData.frequency.MOR ||
      formData.frequency.AFT ||
      formData.frequency.NIT;

    if (!isFrequencySelected) {
      toast.error("Please select at least one frequency");
      return;
    }

    // ✅ Duration Required
    if (!duration) {
      toast.error("Please enter duration");
      return;
    }

    // ✅ Duration Number Only
    if (!/^\d+$/.test(duration)) {
      toast.error("Duration must contain numbers only");
      return;
    }

    if (Number(duration) <= 0) {
      toast.error("Duration must be greater than 0");
      return;
    }

    // ✅ Quantity Required
    if (!quantity) {
      toast.error("Please enter quantity");
      return;
    }

    // ✅ Quantity Number Only
    if (!/^\d+$/.test(quantity)) {
      toast.error("Quantity must contain numbers only");
      return;
    }

    if (Number(quantity) <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }

    const medicineData = {
      id: editId || Date.now(),
      medicine: medicineName,
      type: "Medicine",
      dosage: dosage || "-",
      frequency: formData.frequency,
      meal: formData.meal,
      duration,
      durationType: formData.durationType,
      quantity,
    };

    if (editId) {
      setMedicines((prev) =>
        prev.map((item) => (item.id === editId ? medicineData : item)),
      );

      toast.success("Medicine updated successfully");

      setEditId(null);
    } else {
      setMedicines((prev) => [...prev, medicineData]);

      toast.success("Medicine added successfully");
    }

    setFormData(initialForm);
  };
  const handleEditMedicine = (medicine) => {
    setEditId(medicine.id);

    setFormData({
      medicine: medicine.medicine,
      dosage: medicine.dosage,
      frequency: { ...medicine.frequency },
      meal: medicine.meal,
      duration: medicine.duration,
      durationType: medicine.durationType,
      quantity: medicine.quantity || "",
    });
  };

  const handleDeleteMedicine = (id) => {
    setMedicines((prev) => prev.filter((item) => item.id !== id));

    if (editId === id) {
      setEditId(null);
      setFormData(initialForm);
    }
    toast.error("Medicine deleted successfully");
  };

  return (
    <section className="bg-white rounded-xl border border-slate-100 medical-shadow overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-slate-100 bg-white">
        <SectionHeader icon="pill" title="Medication Plan" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 items-end">
          <div className="lg:col-span-4 space-y-1">
            <FormLabel>Medicine Name</FormLabel>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">
                search
              </span>

              <InputField
                value={formData.medicine}
                onChange={(e) => handleInputChange("medicine", e.target.value)}
                placeholder="Example: Paracetamol"
                className="pl-10"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-1">
            <FormLabel>Dosage</FormLabel>

            <InputField
              value={formData.dosage}
              onChange={(e) => handleInputChange("dosage", e.target.value)}
              placeholder="Example: 500mg"
            />
          </div>

          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Frequency</FormLabel>

            <div className="flex items-center gap-3 h-11 border border-[#c3c6d7] rounded-lg px-3">
              {["MOR", "AFT", "NIT"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-1 text-xs font-semibold"
                >
                  <input
                    type="checkbox"
                    checked={formData.frequency[item]}
                    onChange={() => handleFrequencyChange(item)}
                    className="accent-[#004ac6]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Meal Instruction</FormLabel>

            <FormSelect
              value={formData.meal}
              onChange={(e) => handleInputChange("meal", e.target.value)}
              options={["After Food", "Before Food", "Empty Stomach"]}
            />
          </div>

          {/* DURATION */}
          {/* DURATION */}
          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Duration</FormLabel>

            <div className="grid grid-cols-[minmax(90px,1fr)_112px] gap-2">
              <InputField
                type="number"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
                placeholder="7"
                className="min-w-[90px]"
              />

              <FormSelect
                value={formData.durationType}
                onChange={(e) =>
                  handleInputChange("durationType", e.target.value)
                }
                options={["Days", "Weeks"]}
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Quantity</FormLabel>

            <InputField
              value={formData.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
              placeholder="Example: 10 Tablets"
            />
          </div>

          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={handleAddMedicine}
              className="w-full h-11 flex items-center justify-center gap-2 border-2 border-dashed border-[#004ac6]/30 text-[#004ac6] font-medium bg-blue-50/50 hover:bg-blue-50 transition rounded-lg"
            >
              <span className="material-symbols-outlined">
                {editId ? "edit" : "add_circle"}
              </span>
              {editId ? "Update medicine" : "Add another medicine"}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto border border-slate-100 rounded-lg">
          <table className="w-full min-w-[860px] text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500">
                <th className="px-4 py-3">MEDICINE</th>
                <th className="px-4 py-3">DOSAGE</th>
                <th className="px-4 py-3">FREQ</th>
                <th className="px-4 py-3">MEAL</th>
                <th className="px-4 py-3">DURATION</th>
                <th className="px-4 py-3">QTY</th>
                <th className="px-4 py-3 text-right">ACTION</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {medicines.length > 0 ? (
                medicines.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-slate-900">
                        {item.medicine}
                      </div>
                      <div className="text-xs text-slate-400">{item.type}</div>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-600">
                      {item.dosage}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex gap-1">
                        {["MOR", "AFT", "NIT"].map((freq) => (
                          <span
                            key={freq}
                            className={`w-6 h-6 text-[10px] flex items-center justify-center rounded ${
                              item.frequency[freq]
                                ? "bg-[#004ac6] text-white"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {item.frequency[freq] ? "1" : "0"}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span className="px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-full uppercase">
                        {item.meal}
                      </span>
                    </td>

                    {/* DURATION */}
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {item.duration} {item.durationType}
                    </td>

                    {/* QUANTITY */}
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {item.quantity || "-"}
                    </td>

                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditMedicine(item)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#004ac6] hover:bg-blue-100 transition"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteMedicine(item.id)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-4 py-6 text-center text-sm text-slate-400"
                  >
                    No medicine added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MedicationPlan;
