import React from "react";
import ActionButton from "../../common/ui/ActionButton";

const ProfileActions = () => {
  return (
    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-end items-center gap-4">
      
      {/* Cancel */}
      <ActionButton
        variant="outline"
        className="w-full md:w-auto px-12 py-4 text-slate-500 hover:text-[#191b23]"
      >
        Cancel
      </ActionButton>

      {/* Save */}
      <ActionButton
        variant="primary"
        className="w-full md:w-auto px-12 py-4 font-bold"
      >
        <span className="material-symbols-outlined">save</span>
        Save Changes
      </ActionButton>

    </div>
  );
};

export default ProfileActions;